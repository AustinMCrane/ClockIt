require 'test_helper'

class HoursControllerTest < ActionController::TestCase
  include Devise::TestHelpers

  setup do
    sign_in :user, users(:one)   # sign_in(scope, resource)
  end
test "should get index" do
    get :index
    assert_response :success
  end

end
