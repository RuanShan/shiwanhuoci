#require Rails.root.join('lib', 'rails_admin', 'new_sale.rb')
#RailsAdmin::Config::Actions.register(RailsAdmin::Config::Actions::NewSale)

RailsAdmin.config do |config|
  config.main_app_name = ["XEnglish", "Admin"]
  #config.excluded_models = ['RelTest','Player']
  config.included_models = ["League", "Team", "Player","User" ]

  config.authenticate_with {}
  config.current_user_method {
    current_user#User.first
  }
  config.authorize_with :cancan
  config.audit_with :history, User



end
