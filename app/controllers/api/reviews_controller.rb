class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :home_id)
  end

end
