class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]
  before_action :check_admin, only: [:new_task,:create_task, :create, :update, :destroy]

  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.all
    render component: 'ProjectsList', props: {projects: @projects}
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
    @tasks = Task.where(project_id: @project.id)
    render component: 'Project', props: {project: @project, tasks: @tasks}
  end

  def employees_on_project

  end

  # GET /projects/new
  def new
    @project = Project.new
    render component: 'ProjectCreateForm'
  end

  def show_task
    @task = Task.where(id: params[:task_id]).first
    render component: 'Task', props: {task: @task}
  end

  def new_task
    render component: 'TaskCreateForm', props: {project_id: params[:id]}
  end

  def create_task
    @task = Task.new(task_params)

    if @task.save
      # format.html { redirect_to @project, notice: 'Project was successfully created.' }
      render json: @task
    else
      # format.html { render :new }
      format.json { render json: @task.errors, status: :unprocessable_entity }
    end
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(project_params)

    if @project.save
      # format.html { redirect_to @project, notice: 'Project was successfully created.' }
      render json: @project
    else
      # format.html { render :new }
      format.json { render json: @project.errors, status: :unprocessable_entity }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    def task_params
      params.require(:task).permit(:title, :project_id)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.require(:project).permit(:title, :description)
    end
end
