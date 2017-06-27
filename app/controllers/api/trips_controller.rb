class Api::TripsController < ApplicationController
  def index
    if Trip.all.length != 0
      @trips = Trip.all
    else
      render json: "There are no booked trips"
    end
  end

  def create
    @trip = Trip.find_by(trip_params)
    if @trip.save
      render :show
    else
      render json: @trip.errors.full_messages, status: 422
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
    @trip = Home.find(params[:id])

    if @trip.destroy
      @trip = current_user.trips
      render :index
    else
      render json: @trip.errors.full_messages, status: 404
    end
  end

  private
  def trip_params
    params.require(:trip).permit(:home_id, :visitor_id, :start_date, :end_date)
  end

end
