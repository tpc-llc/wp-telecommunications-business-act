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
                $host = 'http://localhost:8083';
                $this->setHost($host);
                break;
            case 'development':
                $host = 'http://wp-tba-management/wp-json/wptbam';
                $this->setHost($host);
                break;
            default:
                $host = 'https://xn--3kq65av47c4nci1az16mfck.jp/wp-json/wptbam';
                $this->setHost($host);
                break;
        }
    }
}
