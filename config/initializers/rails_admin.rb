#require Rails.root.join('lib', 'rails_admin', 'new_sale.rb')
#RailsAdmin::Config::Actions.register(RailsAdmin::Config::Actions::NewSale)

RailsAdmin.config do |config|
  config.main_app_name = ["ShiWanHuoCi", "Admin"]
  config.included_models = ['Subject', 'Lesson','User', 'Role', 'Word', 'Classification']

  config.authenticate_with do
    warden.authenticate! scope: :user
  end
  config.current_user_method(&:current_user)

  config.authorize_with do
    redirect_to main_app.root_path unless current_user.is_admin?
  end

  config.authorize_with :cancan
  config.audit_with :history, User

  config.model 'Word' do
    field :spelling
    field :card, :paperclip
    field :pronunciation_uk, :paperclip
    field :card do
      # set a method available to your asset (defaults to :thumb, :thumbnail or '100x100>' for Dragonfly)
      thumb_method :thumb
      # for delete checkbox in forms
      delete_method :delete_card     # don't forget to whitelist if you use :attr_accessible
      # in case of a validation failure, to retain asset in the form (not available for Paperclip)
      #cache_method :cache_card       # don't forget to whitelist if you use :attr_accessible
    end

  end
end
