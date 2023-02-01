<?php
class Td 
{
    public $value;
    public function __construct($value)
    {
        $this->value = $value;
    }
    public function render()
    {
        return "<p><input value='".$this->value."'/></p>";
    }
}