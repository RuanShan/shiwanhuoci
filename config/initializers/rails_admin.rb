#require Rails.root.join('lib', 'rails_admin', 'new_sale.rb')
#RailsAdmin::Config::Actions.register(RailsAdmin::Config::Actions::NewSale)
#override orginal, comment out gravatar
RailsAdmin::ApplicationHelper.module_eval do
    def edit_user_link
      return nil unless _current_user.respond_to?(:email)
      return nil unless abstract_model = RailsAdmin.config(_current_user.class).abstract_model
      return nil unless (edit_action = RailsAdmin::Config::Actions.find(:edit, controller: controller, abstract_model: abstract_model, object: _current_user)).try(:authorized?)
      link_to url_for(action: edit_action.action_name, model_name: abstract_model.to_param, id: _current_user.id, controller: 'rails_admin/main') do
        html = []
        #html << image_tag("#{(request.ssl? ? 'https://secure' : 'http://www')}.gravatar.com/avatar/#{Digest::MD5.hexdigest _current_user.email}?s=30", alt: '') if _current_user.email.present?
        html << content_tag(:span, _current_user.email)
        html.join.html_safe
      end
    end
end


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
  #Disable audit, it cause Mysql2::Error: Data too long for column 'message' at row 1: INSERT INTO `rails_admin_histories`
  #config.audit_with :history, User

  config.model 'Word' do
    field :spelling
    field :meanings
    field :card, :paperclip
    field :pronunciation_uk, :paperclip
    field :pronunciation_uk_man, :paperclip
    field :pronunciation_en, :paperclip
    field :pronunciation_en_man, :paperclip

    field :card do
      # set a method available to your asset (defaults to :thumb, :thumbnail or '100x100>' for Dragonfly)
      thumb_method :thumb
      # for delete checkbox in forms
      delete_method :delete_card     # don't forget to whitelist if you use :attr_accessible
      # in case of a validation failure, to retain asset in the form (not available for Paperclip)
      #cache_method :cache_card       # don't forget to whitelist if you use :attr_accessible
    end
    field :description
  end

  config.model 'Subject' do
    field :name
    field :word_count
  end

end
