require 'test_helper'

class TimekeepingTest < ActiveSupport::TestCase
  test "should be finished" do
    assert timekeepings(:one).finished, "Was not finished"
  end
  test "should not be finished" do
    assert_not (timekeepings(:not_clocked_out).finished and timekeepings(:not_clocked_in).finished), "Was finished"
  end
  test "catch malformed timekeepings" do
    assert_not timekeepings(:malformed).save, "Malformed timekeeping was not caught"
  end
end
