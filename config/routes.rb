Rails.application.routes.draw do
  resources :users
  resources :shippings
  resources :payments
  resources :order_products
  resources :sneakers

  post 'signup', to: 'users#create'
  post 'login', to: 'sessions#create'
end
