class HoursController < ApplicationController
  def index
    @times = Timekeeping.all
    render component: 'TimeOverview', props: {times: @times}
  end

  def clock_in_to_task
    @projects = Project.all
    render component: 'ProjectsList', props: {projects: @projects}
  end

  private
  def set_timekeeping
    @timekeeping = Timekeeping.last
    if @timekeeping.nil?
      @timekeeping = Timekeeping.new
    end
    if @timekeeping.finished
      @timekeeping = Timekeeping.new
    end
  end
end
