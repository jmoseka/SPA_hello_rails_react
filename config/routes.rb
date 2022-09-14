Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'greetings', to: 'greetings#index'
    end
  end
  # get 'root/index'
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  

  # Defines the root path route ("/")
  # root "articles#index"
end
