<?php

namespace AbmanTheme\Storefront\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Shopware\Storefront\Page\GenericPageLoader;
use Psr\Container\ContainerInterface;
use Twig\Environment;

class TeamController extends StorefrontController
{
    protected $genericPageLoader;
    protected $container;
    protected $twig;

    public function __construct(GenericPageLoader $genericPageLoader)
    {
        $this->genericPageLoader = $genericPageLoader;
    }

    #[Route('/team', name: 'frontend.abmantheme.team', methods: ['GET'], defaults: ["_routeScope" => "storefront"])]
    public function showPage(Request $request, SalesChannelContext $context): Response
    {
        $page = $this->genericPageLoader->load($request, $context);
        return $this->renderStorefront('@AbmanTheme/storefront/page/team/index.html.twig', [
            'customParameter' => 'Benutzerdefinierter Parameterwert',
            'page' => $page
        ]);
    }

    public function setContainer(ContainerInterface $container): ?ContainerInterface
    {
        $this->container = $container;
        return $container;
    }

    public function setTwig(Environment $twig): void
    {
        $this->twig = $twig;
    }
}
