class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def index
    @reviews = Review.where(home_id: params[:home_id])
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :home_id)
  end
end
