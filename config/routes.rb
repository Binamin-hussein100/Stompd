Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :shippings
      resources :order_products
      resources :payments
      resources :orders
      resources :cart_sneakers
      resources :carts
      resources :users, only: [:index, :create, :show, :update, :destroy]
      resources :sneakers

      # post 'signup', to: 'users#create'
      # post 'login', to: 'sessions#create'
      post '/authenticate', to: 'authentication#create'

      #user
      get '/users', to: 'users#index'
    end
  end
end
