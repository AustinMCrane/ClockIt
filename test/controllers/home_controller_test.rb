require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end
  test "should get clocked in" do
    post :clock_in, timekeeping: { start: timekeepings(:one).start}
    assert_response :success
  end
  test "should not get clocked out" do
    post :clock_out, timekeeping: { end: timekeepings(:one).end}
    assert_response :bad_request
  end

end
