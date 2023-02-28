Rails.application.routes.draw do
  resources :shippings
  resources :order_products
  resources :payments
  resources :orders
  resources :cart_sneakers
  resources :carts
  resources :users
  resources :sneakers

  post 'signup', to: 'users#create'
  post 'login', to: 'sessions#create'
end
