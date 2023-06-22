/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * PluginEndpoints
 * PluginEndpoints
 * OpenAPI spec version: 1.0.0
 */
/**
 * Get Service Policies for shortcode.
 */
export interface GetPublicServicePoliciesResponse {
  /** Service and policies. */
  service_official_policies_uids: string[];
}

/**
 * Post service and policies request.
 */
export interface PostServicePoliciesRequest {
  /** Service and policies. */
  service_official_policies_uids: string[];
}

/**
 * Register new user request.
 */
export interface PostRegisterRequest {
  /** Email. */
  email: string;
  /** Email optin. */
  email_optin: boolean;
}

/**
 * Get Admin Page Info response.
 */
export interface GetAdminPageInfoResponse {
  /** Service and policies. */
  service_official_policies_uids: string[];
  /** Is new user. */
  is_new_user: boolean;
  /** Current user email. */
  current_user_email?: string;
}

