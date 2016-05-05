
DummyApp::Application.routes.draw do
  resources :words
  resources :lessons
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'
  devise_for :users
  root :to => "home#index"

  resources :subjects do
  end
  resources :lessons do
    collection do
      get 'get_more'

    end
    member do
      get 'start'
      get 'touch_word'
    end
  end

end
