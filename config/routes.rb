Rails.application.routes.draw do

  get 'admin/index'
  get 'admin/employees/new' => 'admin#new_employee'
  post 'admin/employees/' => 'admin#create_employee'
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  root 'hours#index'
  resources :projects
  post 'admin/clock_user_out' => 'admin#clock_user_out'
  post 'clock_in' => 'hours#clock_in'
  post 'clock_out' => 'hours#clock_out'
  get 'hours' => 'hours#view_times'
  get 'admin' => 'admin#employees'
  get 'projects/:id/tasks/new' => 'projects#new_task'
  post 'projects/:id' => 'projects#create_task'
  get 'projects/:id/tasks/:task_id' => 'projects#show_task'
  get 'hours/select_project' => 'hours#clock_in_to_task'
end
