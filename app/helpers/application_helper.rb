module ApplicationHelper

  def flash_alert flash
    if flash.present?
      message = flash[:error] || flash[:notice] || flash[:success] || flash[:alert]
      flash_class = "danger" if flash[:error]
      flash_class = "info" if flash[:notice]
      flash_class = "success" if flash[:success]
      flash_class = "alert" if flash[:alert]
      flash_div = content_tag(:div, message, class: "alert alert-#{flash_class} alert-auto-disappear")
      content_tag(:div, flash_div, class: 'col-md-12')
    end
  end

  def get_nav_css_class( other_model_name )
    #Rails.logger.debug "controller_name=#{controller_name}, action=#{action_name}, @model_name#{@model_name} other_model_name=#{other_model_name}"
    is_current = if @model_name.present?
      @model_name =~ /#{other_model_name}/
    else
      "#{controller_name}_#{action_name}" =~ /#{other_model_name}/
    end
    is_current ? 'active' : ''
  end

end
