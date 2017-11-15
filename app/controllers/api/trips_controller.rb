class Api::TripsController < ApplicationController
  def index
    if Trip.all.length != 0
      @trips = Trip.where(visitor_id: current_user.id).includes(:home)
    else
      render json: "There are no booked trips"
    end
  end

  def create
    @home = Home.find(trip_params[:home_id])

    start_date = trip_params[:start_date].to_date
    end_date = trip_params[:end_date].to_date
    
    if @home.booking_conflict?(start_date, end_date)
      render json: "Home is unavailable on those dates", status: 422
    else
      @trip = Trip.new(trip_params)
      @trip.visitor_id = current_user.id

      if @trip.save
        @trips = Trip.where(visitor_id: current_user.id).includes(:home)
        render :index
      else
        render json: @trip.errors.full_messages, status: 422
      end
    end
  end

  def show
    @trip = Trip.find(params[:id])
    if @trip
      render :show
    else
      render json: @trip.errors.full_messages, status: 404
    end
  end

  def destroy
    @trip = Trip.find(params[:id])
    if current_user.id == @trip.visitor_id
      @trip.destroy
    else
      render json: @trip.errors.full_messages, status: 404
    end
  end

  private
  def trip_params
    params.require(:trip).permit(
      :home_id,
      :start_date,
      :end_date,
      :num_guests,
      :total_cost,
      :nightly_cost,
      :service_cost,
      :cleaning_cost,
      :days,
    )
  end

end
