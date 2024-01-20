<?php declare(strict_types=1);

use AbmanTheme\Core\Content\FaqEntity\FaqCollection;
use AbmanTheme\Core\Content\FaqEntity\FaqEntity;
use Shopware\Core\Content\Product\ProductEntity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;

class FaqEntityDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'faq_entity';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getCollectionClass(): string
    {
        return FaqCollection::class;
    }

    public function getEntityClass(): string
    {
        return FaqEntity::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new Required(), new PrimaryKey()),
            new StringField('question', 'question'),
            new StringField('answer', 'answer'),
            (new FkField('product_id', 'productId', ProductEntity::class)),
            new ManyToOneAssociationField('product', 'product_id', ProductEntity::class, 'id', false)
        ]);
    }
}