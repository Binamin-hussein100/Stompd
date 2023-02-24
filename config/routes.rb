Rails.application.routes.draw do
  resources :shippings
  resources :payments
  resources :order_products
  resources :orders
  resources :carts_sneakers
  resources :sneakers
  resources :carts
  resources :users

  post 'signup', to: 'users#create'
  post 'login', to: 'sessions#create'
end
