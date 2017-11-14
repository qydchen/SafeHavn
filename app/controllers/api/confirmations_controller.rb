class Api::ConfirmationsController < ApplicationController
  def create
    @confirmation = Confirmation.new(confirmation_params)
    @confirmation.user_id = current_user.id
    if @confirmation.save
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
      render json: ["Page Expired"]
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
