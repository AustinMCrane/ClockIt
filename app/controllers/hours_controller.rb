class HoursController < ApplicationController
  before_action :set_timekeeping, only: [:clock_out, :clock_in, :index]
  def index
    @is_clocked_in =  @timekeeping.start?
    render component: 'Timekeeping', props: {clocked_in: @is_clocked_in}
  end

  def view_times
    @times = Timekeeping.where(user_id: current_user.id)
    render component: 'TimeOverview', props: {times: @times}
  end

  def clock_in_to_task
    @projects = Project.all
    render component: 'ProjectsList', props: {projects: @projects}
  end
  def clock_in
    @timekeeping.start = timekeeping_params[:start]
    @timekeeping.task_id = timekeeping_params[:task_id]
    @timekeeping.user_id = current_user.id
    puts "hello"
    if @timekeeping.save
      render json: {success: true,  message: "You successfully clocked in!"}
    else
      render json: {success: false, message: "Unable to clock you in at this time..."}
    end
  end

  def clock_out
    if @timekeeping.start?
      @timekeeping.end = timekeeping_params[:end]
      if @timekeeping.save
        set_timekeeping
        render json: {success: true,  message: "You successfully clocked out!"}
      end
    else
      render json: {success: false, message: "Unable to clock you out at this time..."}, status: :bad_request
    end

  end

  private

  def timekeeping_params
    params.require(:timekeeping).permit(:start, :end, :task_id)
  end

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
