require 'test_helper'

class ClockInTest < ActionDispatch::IntegrationTest

  test "normal clock in" do
    login
    go_to_clock_in
    assert clock_in
  end

  private
  def login
  end
  def go_to_clock_in
    assert_routing '/', { controller: "hours", action: "index"}
  end

  def clock_in
    post '/clock_in', timekeeping: { task_id: 1, started: Time.now }
    assert_response 302
  end
end
