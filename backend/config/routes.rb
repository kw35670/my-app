Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    get "test", to: "test#index"
    post "login", to: "auth#login"
  end
end
