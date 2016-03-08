Rails.application.routes.draw do
  get 'admin/index'

  devise_for :users

  root 'hours#index'
  resources :projects
  post 'clock_in' => 'hours#clock_in'
  post 'clock_out' => 'hours#clock_out'
  get 'hours' => 'hours#view_times'
  get 'projects/:id/tasks/new' => 'projects#new_task'
  post 'projects/:id' => 'projects#create_task'
  get 'projects/:id/tasks/:task_id' => 'projects#show_task'
  get 'hours/select_project' => 'hours#clock_in_to_task'
end
