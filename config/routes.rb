Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :shippings
      resources :order_products
      resources :payments
      resources :orders
      resources :cart_sneakers
      resources :carts
      resources :users
      resources :sneakers

      # post 'signup', to: 'users#create'
      # post 'login', to: 'sessions#create'
      post 'authenticate', to: 'authentication#create'
    end
  end
end
