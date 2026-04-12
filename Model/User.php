<?php
/**
 * User – Model de usuário
 *
 * @package Parenty\Model
 * @version 1.0.0
 */

namespace Parenty\Model;

class User
{
    public function __construct(
        private string $name,
        private string $email,
        private string $role = 'parent'
    ) {}

    public function getName(): string
    {
        return $this->name;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getRole(): string
    {
        return $this->role;
    }
}
