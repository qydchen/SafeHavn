class Api::ConfirmationsController < ApplicationController
  def create
    @confirmation = Confirmation.new(confirmation_params)
    @confirmation.user_id = current_user.id
    @home = Home.find(confirmation_params[:home_id])

    start_date = confirmation_params[:start_date].to_date
    end_date = confirmation_params[:end_date].to_date

    if @home.booking_conflict?(start_date, end_date)
      render json: "Home is unavailable on those dates", status: 422
    elsif @confirmation.save
      render :show
    else
      render json: @confirmation.errors.full_messages, status: 422
    end
  end

  def show
    @confirmation = Confirmation.find_by(user_id: current_user.id)
    if @confirmation
      render :show
    else
      render json: "Error", status: 422
    end
  end

  def destroy
    @confirmation = Confirmation.find_by(user_id: current_user.id)
    @confirmation.destroy
    render :show
  end

  private
  def confirmation_params
    params.require(:confirmation).permit(
      :cleaning_cost,
      :days,
      :end_date,
      :home_id,
      :num_guests,
      :service_cost,
      :nightly_cost,
      :start_date,
      :total_cost,
    )
  end

end
