<?php declare(strict_types=1);

namespace AbmanTheme\Controller;

use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Shopware\Core\Framework\Routing\Annotation\RouteScope;

#[Route(scopes: ['storefront'])]
class FaqController extends StorefrontController
{
    #[Route(path: '/faq/save', name: 'frontend.faq.save', methods: ['POST'], defaults: ['XmlHttpRequest' => true, 'csrf_protected' => false])]
    public function saveFaq(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $projectDir = $this->container->get('kernel.project_dir');
        $file = $projectDir . '/custom/plugins/AbmanTheme/src/Resources/app/administration/src/module/faq-module/page/faq-module-index/faq-data.json';

        $existingData = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

        $existingData[] = $data;

        file_put_contents($file, json_encode($existingData, JSON_PRETTY_PRINT));

        return new JsonResponse(['status' => 'success']);
    }
}
