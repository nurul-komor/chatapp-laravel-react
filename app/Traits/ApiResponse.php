<?php

namespace App\Traits;

use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

/**
 * Class RestController
 *
 * This class provides a RESTful API response structure for Laravel applications.
 *
 * @package Sajadsdi\LaravelRestResponse\Http\Controllers (Modified by nurul-komor)
 */

trait ApiResponse
{

    /**
     * Get the version of the api.
     *
     * @return string
     */
    protected function getVersion(): string
    {
        return '1.0.0';
    }

    /**
     * Generates a response with the provided data, message, errors, and status code.
     *
     * @param mixed $data
     * @param string $message
     * @param array $errors
     * @param int $status
     * @return Response|ResponseFactory
     */
    public function response(mixed $data = [], string $message = 'success', array $errors = [], int $statusCode = 200, bool $status = true): Response|ResponseFactory
    {
        $response = ['status' => $status, 'message' => $message];

        if ($status) {
            $response['data'] = $data;
        } else {
            $response['errors'] = $errors;
        }

        $response['version'] = $this->getVersion();

        return response($response, $statusCode);
    }

    /**
     * Generates a response for successful creation with the provided data and message.
     *
     * @param mixed $data
     * @param string $message
     * @return Response|ResponseFactory
     */
    public function createResponse(mixed $data = [], string $message = 'create success!'): Response|ResponseFactory
    {
        return $this->response($data, $message, [], 201);
    }

    /**
     * Generates a response for successful update with the provided data and message.
     *
     * @param mixed $data
     * @param string $message
     * @return Response|ResponseFactory
     */
    public function updateResponse(mixed $data = [], string $message = 'update success!'): Response|ResponseFactory
    {
        return $this->response($data, $message, []);
    }

    /**
     * Generates a response for successful deletion.
     *
     * @return Response|ResponseFactory
     */
    public function deleteResponse(): Response|ResponseFactory
    {
        return response(null, 204);
    }

    /**
     * Generates a response for a not found resource with the provided message and errors.
     *
     * @param string $message
     * @param array $errors
     * @return Response|ResponseFactory
     */
    public function notFoundResponse(string $message = 'not found!', array $errors = []): Response|ResponseFactory
    {
        return $this->response([], $message, $errors, 404, false);
    }

    /**
     * Generates a response for forbidden access with the provided message and errors.
     *
     * @param string $message
     * @param array $errors
     * @return Response|ResponseFactory
     */
    public function forbiddenResponse(string $message = 'forbidden!', array $errors = []): Response|ResponseFactory
    {
        return $this->response([], $message, $errors, 403, false);
    }

    /**
     * Generates a response for unauthorized access with the provided message and errors.
     *
     * @param string $message
     * @param array $errors
     * @return Response|ResponseFactory
     */
    public function unauthorizedResponse(string $message = 'unauthorized!', array $errors = []): Response|ResponseFactory
    {
        return $this->response([], $message, $errors, 401, false);
    }

    /**
     * Generates a response for a bad request with the provided message and errors.
     *
     * @param string $message
     * @param array $errors
     * @return Response|ResponseFactory
     */
    public function badRequestResponse(string $message = 'bad request!', array $errors = []): Response|ResponseFactory
    {
        return $this->response([], $message, $errors, 400, false);
    }

}