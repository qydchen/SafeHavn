class Api::ReviewsController < ApplicationController

  def show
    @review = Review.find(review_params[:home_id])
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages
    end
  end

  private

  def review_params
    params.require(:review).permit(
      :rating,
      :body,
      :home_id
    )
  end
end
