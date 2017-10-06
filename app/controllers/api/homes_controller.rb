class Api::HomesController < ApplicationController
  def index
    if Home.all.length != 0
      @homes = params[:bounds] ? Home.includes(:reviews, :host).in_bounds(params[:bounds]) : Home.where(featured: true).includes(:reviews, :host).limit(8)
      if (params[:minHousing] && params[:maxHousing])
        @homes = @homes.where(max_guests: housing_range)
      end
      if (params[:minPrice] && params[:maxPrice])
        @homes = @homes.where(price: price_range)
      end
      if (params[:featured] == true)
        @homes = @homes.where(featured: true)
      end

    else
      render json: 'There are no homes'
    end
  end

  def my
    @homes = current_user.homes
    render :index
  end

  def show
    @home = Home.includes(:visitors).find(params[:id])
    if @home
      render :show
    else
      render json: @home.errors.full_messages, status: 404
    end
  end

  def create
    @home = Home.new(home_params)
    @home.host_id = current_user.id
    if @home.save
      render :show
    else
      render json: @home.errors.full_messages, status: 422
    end

  end

  def update
    @home = current_user.homes.find(params[:id])
    if @home.update(home_params)
      render :show
    else
      render json: @home.errors.full_messages, status: 401
    end

  end

  def destroy
    @home = Home.find(params[:id])

    if @home.destroy
      @home = current_user.homes
      render :index
    else
      render json: @home.errors.full_messages, status: 404
    end

  end

  private

  def home_params
    params.require(:home).permit(
      :lat, :lng, :price, :host,
      :image, :title, :description, :cancellation,
      :address, :max_guests, :start_date, :end_date, :bathrooms,
      :property_type, :room_type, :internet, :family,
      :parking, :kitchen, :beds, :bedrooms, :image, :bounds, :featured
    )
  end

  def housing_range
    (params[:minHousing]..params[:maxHousing])
  end

  def price_range
    (params[:minPrice]..params[:maxPrice])
  end

  # def start_date
  #   params["start_date"]
  # end
  #
  # def end_date
  #   params["end_date"]
  # end

end
