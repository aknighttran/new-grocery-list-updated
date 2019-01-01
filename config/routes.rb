Rails.application.routes.draw do
  namespace :api do
    resources :lists do
      resources :items
    end
  end
  
end
