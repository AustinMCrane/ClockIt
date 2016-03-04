class HomeController < ApplicationController
  before_action :set_timekeeping, only: [:clock_out, :clock_in, :index]
  def index
    @is_clocked_in =  @timekeeping.start?
    render component: 'Timekeeping', props: {clocked_in: @is_clocked_in}
  end

  def clock_in
    @timekeeping.start = timekeeping_params[:start]
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
  def set_timekeeping
    @timekeeping = Timekeeping.last
    if @timekeeping.nil?
      @timekeeping = Timekeeping.new
    end
    if @timekeeping.finished
      @timekeeping = Timekeeping.new
    end
  end

  def timekeeping_params
    params.require(:timekeeping).permit(:start, :end)
  end
end
