<?php
/**
 * Admin Application Request and Response.
*/

namespace WPTBA\Presentation\Endpoint\Admin\EmailOptin;

/**
 * Email Optin Request.
 *
 * @OA\Schema(
 *  required={"email_optin"}
 * )
*/
class PatchEmailOptinRequest
{
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
     * @param boolean $email_optin Email optin.
     *
     * @return void
    */
    public function __construct($email_optin)
    {
        $this->email_optin = $email_optin;
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
