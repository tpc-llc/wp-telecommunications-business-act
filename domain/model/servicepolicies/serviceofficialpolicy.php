<?php
/**
 * Service Official Policy.
 *
 * @package WPTBA
 */

namespace WPTBA\Domain\Model;

/**
 * Service Official Policy.
 */
class ServiceOfficialPolicy
{
    /**
     * Service Unique ID.
     *
     * @var string $service_unique_id Service Unique ID.
    */
    private $service_unique_id;

    /**
     * Constructor.
     *
     * @param string $service_unique_id Service Unique ID.
    */
    public function __construct($service_unique_id)
    {
        $this->service_unique_id = $service_unique_id;
    }

    /**
     * Getter.
    */
    public function getServiceUniqueId()
    {
        return $this->service_unique_id;
    }
}
