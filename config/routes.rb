
DummyApp::Application.routes.draw do
  resources :words
  resources :lessons
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'
  devise_for :users
  root :to => "home#index"

  resources :subjects do
    resources :lessons do
    
      get 'start', on: :member

    end
  end

end
