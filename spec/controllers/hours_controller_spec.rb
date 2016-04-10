require 'rails_helper'

RSpec.describe HoursController, type: :controller do
  describe "General Hours tests, these are very critical" do
    login_user
    it "should clock in" do
      post :clock_in , :timekeeping => {started: Date.new, task_id: 1}
      response.should be_success
    end
    it "should clock out" do
      
    end
  end
end
