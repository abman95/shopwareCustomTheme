<?php declare(strict_types=1);

namespace AbmanTheme\Core\Content\FaqEntity;

use Shopware\Core\Framework\DataAbstractionLayer\Entity;

class FaqEntity extends Entity
{
    protected string $id;
    protected string $question;
    protected string $answer;
    protected string $productId;

    // Getter and Setter for id
    public function getId(): string
    {
        return $this->id;
    }

    public function setId(string $id): void
    {
        $this->id = $id;
    }

    // Getter and Setter for question
    public function getQuestion(): string
    {
        return $this->question;
    }

    public function setQuestion(string $question): void
    {
        $this->question = $question;
    }

    // Getter and Setter for answer
    public function getAnswer(): string
    {
        return $this->answer;
    }

    public function setAnswer(string $answer): void
    {
        $this->answer = $answer;
    }

    // Getter and Setter for productId
    public function getProductId(): string
    {
        return $this->productId;
    }

    public function setProductId(string $productId): void
    {
        $this->productId = $productId;
    }
}