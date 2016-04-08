require 'test_helper'

class ProjectsControllerTest < ActionController::TestCase
  include Devise::TestHelpers

  setup do
    sign_in :user, users(:one)   # sign_in(scope, resource)
    @project = projects(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:projects)
  end

  test "should get new" do
    get :new
    assert_response :success
  end


  test "should show project" do
    get :show, id: @project
    assert_response :success
  end

end
