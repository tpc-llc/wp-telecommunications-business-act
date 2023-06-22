<?php
/**
 * Admin Application Request and Response.
*/

namespace WPTBA\Presentation\Endpoint\Admin\Register;

/**
 * Register new user request.
 *
 * @OA\Schema(
 *  required={"email", "email_optin"}
 * )
*/
class PostRegisterRequest
{
    /**
     * Email.
     *
     * @var string $email Email.
     *
     * @OA\Property(
     *   type="string"
     * )
    */
    private $email;

    /**
     * Email optin.
     *
     * @var boolean $email_optin Email optin.
     *
     * @OA\Property(
     *   type="boolean"
     * )
    */
    private $email_optin;

    /**
     * Constructor.
     *
     * @param string $email Email.
     * @param boolean $email_optin Email optin.
     *
     * @return void
    */
    public function __construct($email, $email_optin)
    {
        $this->email = $email;
        $this->email_optin = $email_optin;
    }

    /**
     * Get email.
     *
     * @return string Email.
    */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Get email optin.
     *
     * @return boolean Email optin.
    */
    public function getEmailOptin()
    {
        return $this->email_optin;
    }
}
