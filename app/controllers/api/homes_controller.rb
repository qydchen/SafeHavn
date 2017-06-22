class Api::HomesController < ApplicationController
  def index
    if Home.all.length != 0
      @homes = Home.all
    else
      render json: 'There are no homes'
    end
  end

  def my
    @homes = current_user.homes
    render :index
  end

  def show
    @home = Home.find(params[:id])
    if @home
      render :show
    else
      render json: @home.errors.full_messages, status: 404
    end
  end

  def create
    @home = Home.new(home_params)

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
    params.require(:homes).permit(
      :lat, :lng, :price, :host,
      :image_url, :title, :space,
      :amenity, :description, :cancellation,
      :address, :max_guests, :start_date, :end_date
    )
  end

  def start_date
    params["start_date"]
  end

  def end_date
    params["end_date"]
  end


end
