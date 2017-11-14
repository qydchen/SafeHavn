Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :homes
    resources :trips, only: [:create, :destroy, :index, :show]
    resources :reviews, only: [:create, :index, :show]
    resources :confirmations, only: [:create, :show, :destroy]
  end
end
