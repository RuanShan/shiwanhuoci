
DummyApp::Application.routes.draw do
  resources :words
  resources :lessons
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'
  devise_for :users
  root :to => "home#index"

  resources :subjects do
  end
  resources :lessons do
    get 'get_more', on: :collection
    get 'start', on: :member
  end

end
