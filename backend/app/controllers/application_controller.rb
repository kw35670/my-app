class ApplicationController < ActionController::API
  def authenticate_user
    header = request.headers["Authorization"]
    token = header.split(" ").last rescue nil
    begin
      payload = JWT.decode(token, Rails.application.secret_key_base).first
      @current_user = User.find(payload["user_id"])
    rescue
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end
end
