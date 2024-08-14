import axios from "axios"
const workoutwithfriendsAPI = axios.create({
  baseURL: "https://workoutwithfriends-48242.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return workoutwithfriendsAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_friendship_list(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/friendship/`)
}
function api_v1_friendship_create(payload) {
  return workoutwithfriendsAPI.post(`/api/v1/friendship/`, payload)
}
function api_v1_friendship_retrieve(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/friendship/${payload.id}/`)
}
function api_v1_friendship_update(payload) {
  return workoutwithfriendsAPI.put(`/api/v1/friendship/${payload.id}/`, payload)
}
function api_v1_friendship_partial_update(payload) {
  return workoutwithfriendsAPI.patch(
    `/api/v1/friendship/${payload.id}/`,
    payload
  )
}
function api_v1_friendship_destroy(payload) {
  return workoutwithfriendsAPI.delete(`/api/v1/friendship/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return workoutwithfriendsAPI.post(`/api/v1/login/`, payload)
}
function api_v1_penalty_list(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/penalty/`)
}
function api_v1_penalty_create(payload) {
  return workoutwithfriendsAPI.post(`/api/v1/penalty/`, payload)
}
function api_v1_penalty_retrieve(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/penalty/${payload.id}/`)
}
function api_v1_penalty_update(payload) {
  return workoutwithfriendsAPI.put(`/api/v1/penalty/${payload.id}/`, payload)
}
function api_v1_penalty_partial_update(payload) {
  return workoutwithfriendsAPI.patch(`/api/v1/penalty/${payload.id}/`, payload)
}
function api_v1_penalty_destroy(payload) {
  return workoutwithfriendsAPI.delete(`/api/v1/penalty/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return workoutwithfriendsAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_transaction_list(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/transaction/`)
}
function api_v1_transaction_create(payload) {
  return workoutwithfriendsAPI.post(`/api/v1/transaction/`, payload)
}
function api_v1_transaction_retrieve(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/transaction/${payload.id}/`)
}
function api_v1_transaction_update(payload) {
  return workoutwithfriendsAPI.put(
    `/api/v1/transaction/${payload.id}/`,
    payload
  )
}
function api_v1_transaction_partial_update(payload) {
  return workoutwithfriendsAPI.patch(
    `/api/v1/transaction/${payload.id}/`,
    payload
  )
}
function api_v1_transaction_destroy(payload) {
  return workoutwithfriendsAPI.delete(`/api/v1/transaction/${payload.id}/`)
}
function api_v1_user_list(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return workoutwithfriendsAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return workoutwithfriendsAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return workoutwithfriendsAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return workoutwithfriendsAPI.delete(`/api/v1/user/${payload.id}/`)
}
function api_v1_useractivity_list(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/useractivity/`)
}
function api_v1_useractivity_create(payload) {
  return workoutwithfriendsAPI.post(`/api/v1/useractivity/`, payload)
}
function api_v1_useractivity_retrieve(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/useractivity/${payload.id}/`)
}
function api_v1_useractivity_update(payload) {
  return workoutwithfriendsAPI.put(
    `/api/v1/useractivity/${payload.id}/`,
    payload
  )
}
function api_v1_useractivity_partial_update(payload) {
  return workoutwithfriendsAPI.patch(
    `/api/v1/useractivity/${payload.id}/`,
    payload
  )
}
function api_v1_useractivity_destroy(payload) {
  return workoutwithfriendsAPI.delete(`/api/v1/useractivity/${payload.id}/`)
}
function api_v1_workout_list(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/workout/`)
}
function api_v1_workout_create(payload) {
  return workoutwithfriendsAPI.post(`/api/v1/workout/`, payload)
}
function api_v1_workout_retrieve(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/workout/${payload.id}/`)
}
function api_v1_workout_update(payload) {
  return workoutwithfriendsAPI.put(`/api/v1/workout/${payload.id}/`, payload)
}
function api_v1_workout_partial_update(payload) {
  return workoutwithfriendsAPI.patch(`/api/v1/workout/${payload.id}/`, payload)
}
function api_v1_workout_destroy(payload) {
  return workoutwithfriendsAPI.delete(`/api/v1/workout/${payload.id}/`)
}
function api_v1_workoutlog_list(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/workoutlog/`)
}
function api_v1_workoutlog_create(payload) {
  return workoutwithfriendsAPI.post(`/api/v1/workoutlog/`, payload)
}
function api_v1_workoutlog_retrieve(payload) {
  return workoutwithfriendsAPI.get(`/api/v1/workoutlog/${payload.id}/`)
}
function api_v1_workoutlog_update(payload) {
  return workoutwithfriendsAPI.put(`/api/v1/workoutlog/${payload.id}/`, payload)
}
function api_v1_workoutlog_partial_update(payload) {
  return workoutwithfriendsAPI.patch(
    `/api/v1/workoutlog/${payload.id}/`,
    payload
  )
}
function api_v1_workoutlog_destroy(payload) {
  return workoutwithfriendsAPI.delete(`/api/v1/workoutlog/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return workoutwithfriendsAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return workoutwithfriendsAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return workoutwithfriendsAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return workoutwithfriendsAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return workoutwithfriendsAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload
  )
}
function rest_auth_registration_create(payload) {
  return workoutwithfriendsAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return workoutwithfriendsAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return workoutwithfriendsAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return workoutwithfriendsAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return workoutwithfriendsAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return workoutwithfriendsAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_friendship_list,
  api_v1_friendship_create,
  api_v1_friendship_retrieve,
  api_v1_friendship_update,
  api_v1_friendship_partial_update,
  api_v1_friendship_destroy,
  api_v1_login_create,
  api_v1_penalty_list,
  api_v1_penalty_create,
  api_v1_penalty_retrieve,
  api_v1_penalty_update,
  api_v1_penalty_partial_update,
  api_v1_penalty_destroy,
  api_v1_signup_create,
  api_v1_transaction_list,
  api_v1_transaction_create,
  api_v1_transaction_retrieve,
  api_v1_transaction_update,
  api_v1_transaction_partial_update,
  api_v1_transaction_destroy,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  api_v1_useractivity_list,
  api_v1_useractivity_create,
  api_v1_useractivity_retrieve,
  api_v1_useractivity_update,
  api_v1_useractivity_partial_update,
  api_v1_useractivity_destroy,
  api_v1_workout_list,
  api_v1_workout_create,
  api_v1_workout_retrieve,
  api_v1_workout_update,
  api_v1_workout_partial_update,
  api_v1_workout_destroy,
  api_v1_workoutlog_list,
  api_v1_workoutlog_create,
  api_v1_workoutlog_retrieve,
  api_v1_workoutlog_update,
  api_v1_workoutlog_partial_update,
  api_v1_workoutlog_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
