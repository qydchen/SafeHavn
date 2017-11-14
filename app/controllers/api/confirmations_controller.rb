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
    @confirmation = Confirmation.find(current_user.id)
  end

  def destroy
    @confirmation = Confirmation.find(current_user.id)
    @confirmation.destroy
    render :show
  end

  private
  def confirmation_params
    params.require(:confirmation).permit(
      :home_id,
      :start_date,
      :end_date,
      :num_guests,
      :totalcost,
      :cleaningcost
      :servicecost
    )
  end

end
