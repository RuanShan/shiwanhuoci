#require Rails.root.join('lib', 'rails_admin', 'new_sale.rb')
#RailsAdmin::Config::Actions.register(RailsAdmin::Config::Actions::NewSale)

RailsAdmin.config do |config|
  config.main_app_name = ["ShiWanHuoCi", "Admin"]
  config.included_models = ['Subject', 'Lesson','User', 'Role']

  config.authenticate_with do
    warden.authenticate! scope: :user
  end
  config.current_user_method(&:current_user)

  config.authorize_with do
    redirect_to main_app.root_path unless current_user.is_admin?
  end

  config.authorize_with :cancan
  config.audit_with :history, User


end
