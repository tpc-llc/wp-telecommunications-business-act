<?php
/**
 * Client Base Configuration.
 *
 * @package WPTBA
 */

namespace WPTBA\lib;

use OpenApi\Client\Configuration;

/**
 * Base Configuration for wp monetize debug.
 */
class BaseConfig extends Configuration
{
    /**
     * Constructor.
     *
     * @param string $client_secret Client secret.
     */
    public function __construct($client_secret)
    {
        parent::__construct();

        $this->setUserAgent('WPTBA Plugin OAS Client : ' . $client_secret);
        $env = getenv('WPTBA_ENV');
        switch ($env) {
            case 'test':
                $host = 'https://localhost:8080';
                $this->setHost($host);
                break;
            case 'debug':
                $host = 'http://localhost:8000';
                $this->setHost($host);
                break;
            default:
                $host = 'https://localhost:8080';
                $this->setHost($host);
                break;
        }
    }
}
